import { ReactNode } from "react";
import "./index.scss";
import { X } from "lucide-react";
import { AlertTypes } from "../../../types";
interface Iprops {
  type: AlertTypes;
  icon: ReactNode;
  title: string;
  desc?: string;
  children?: ReactNode;
}

const Alert = ({ type, icon, title, desc, children }: Iprops) => {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="title">
          {icon}
          <h2>{title}</h2>
        </div>
        <X className="close" size={25} />
      </div>

      {children ? children : <p>{desc}</p>}
    </div>
  );
};

export default Alert;
