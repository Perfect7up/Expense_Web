// WebsiteLayout.tsx
import React, { ReactNode } from 'react';

interface WebsiteLayoutProps {
  children: ReactNode;
}

const WebsiteLayout: React.FC<WebsiteLayoutProps> = ({ children }) => (
  <div className="website-layout">{children}</div>
);

export default WebsiteLayout;
