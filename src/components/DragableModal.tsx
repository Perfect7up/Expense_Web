import React, { useRef, useState, useEffect } from 'react';
import { Modal, Input, Select, Form } from 'antd';
import type { DraggableData, DraggableEvent } from 'react-draggable';
import Draggable from 'react-draggable';

interface FormField {
  name: string;
  label: string;
  type: 'input' | 'select';
  options?: { label: string; value: string | number }[];
}

interface DraggableModalProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  open: boolean;
  onOk: (values: Record<string, any>) => void;
  onCancel: () => void;
  formFields: FormField[];
  initialValues?: Record<string, any>; // Add initialValues prop
  children?: React.ReactNode;
}

const DraggableModal: React.FC<DraggableModalProps> = ({
  title,
  description,
  open,
  onOk,
  onCancel,
  formFields,
  initialValues = {}, // Default to an empty object if not provided
  children
}) => {
  const [disabled, setDisabled] = useState(true);
  const [bounds, setBounds] = useState({ left: 0, top: 0, bottom: 0, right: 0 });
  const draggleRef = useRef<HTMLDivElement>(null);
  const [form] = Form.useForm();

  const onStart = (_event: DraggableEvent, uiData: DraggableData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y)
    });
  };

  useEffect(() => {
    if (open) {
      form.setFieldsValue(initialValues); // Set form fields when modal opens
    } else {
      form.resetFields(); // Reset form when modal closes
    }
  }, [open, initialValues, form]);

  const handleOk = () => {
    form.validateFields().then((values) => {
      onOk(values);
    });
  };

  return (
    <Modal
      title={
        <div
          style={{ width: '100%', cursor: 'move' }}
          onMouseOver={() => {
            if (disabled) {
              setDisabled(false);
            }
          }}
          onMouseOut={() => {
            setDisabled(true);
          }}
        >
          <div className="text-center">{title}</div>
          {description && <div className="text-center text-sm text-gray-600">{description}</div>}
        </div>
      }
      open={open}
      onOk={handleOk}
      onCancel={onCancel}
      modalRender={(modal) => (
        <Draggable
          disabled={disabled}
          bounds={bounds}
          nodeRef={draggleRef}
          onStart={(event, uiData) => onStart(event, uiData)}
        >
          <div ref={draggleRef}>{modal}</div>
        </Draggable>
      )}
    >
      <Form form={form} layout="vertical" initialValues={initialValues}>
        {formFields.map((field) => (
          <Form.Item key={field.name} name={field.name} label={field.label}>
            {field.type === 'input' ? (
              <Input />
            ) : field.type === 'select' && field.options ? (
              <Select options={field.options} />
            ) : null}
          </Form.Item>
        ))}
      </Form>
      {children}
    </Modal>
  );
};

export default DraggableModal;