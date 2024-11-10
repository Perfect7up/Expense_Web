import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  ExclamationCircleOutlined,
  DollarCircleOutlined,
  FileTextOutlined
} from '@ant-design/icons';

const TaskList = () => {
  const tasks = [
    {
      title: 'Pending Approvals',
      count: 5,
      icon: <CheckCircleOutlined className="text-green-500" />
    },
    {
      title: 'New Trips Registered',
      count: 1,
      icon: <ClockCircleOutlined className="text-yellow-500" />
    },
    {
      title: 'Unreported Expenses',
      count: 4,
      icon: <ExclamationCircleOutlined className="text-red-500" />
    },
    {
      title: 'Upcoming Expenses',
      count: 0,
      icon: <DollarCircleOutlined className="text-blue-500" />
    },
    {
      title: 'Unreported Advances',
      count: '€51.00',
      icon: <FileTextOutlined className="text-purple-500" />
    }
  ];

  return (
    <div className="bg-primary p-4 rounded-md">
      <h2 className="text-lg font-semibold mb-2">Pending Tasks</h2>
      <hr />
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between py-2 font-semibold">
            <span className="flex items-center px-2">
              {task.icon}
              <span className="ml-2 text-textPrimary">{task.title}</span>
            </span>
            <span className="px-2">{task.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
