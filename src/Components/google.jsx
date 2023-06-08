import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
export function Google() {
  return (
    <GoogleLogin
      onSuccess={(response) =>
        console.log("Hello, There", jwtDecode(response.credential))
      }
      onError={() => console.log("Login Failed")}
    />
  );
}
