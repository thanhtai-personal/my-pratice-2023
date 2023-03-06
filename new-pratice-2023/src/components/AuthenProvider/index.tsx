import { getAuthData } from "actions/auth.actions";
import useDepsContainer from "hooks/useDepsContainer";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import UnauthorizePage from "./Unauthorize";
import { isEmpty } from "lodash";

interface AutheProps {
  roles?: Array<any>; //what roles is access to children page
  children: any;
}

const AuthenProvider = (props: AutheProps) => {
  const { roles = [] } = props;
  const [isAuthen, setAuthen] = useState(false);
  const { auth } = useDepsContainer();

  useEffect(() => {
    getAuthData();
  }, []);

  useEffect(() => {
    if (isEmpty(roles) || roles.includes(auth.role)) {
      setAuthen(true);
    } else {
      setAuthen(false);
    }
  }, [auth]);

  if (isAuthen) return props.children;

  return <UnauthorizePage />;
};

export default observer(AuthenProvider);
