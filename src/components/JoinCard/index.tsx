/* import { MouseEventHandler, InputHTMLAttributes, useState} from "react";
import Button from "components/Button";
import Input from "components/Input";
import * as S from "./styles";

export type InputProps = {
  
  initialValue?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

export interface IJoinCardProps {
  label: string,
  onClick?: MouseEventHandler,
  onInput?: (value: string) => void
}

const [ID, setID] = useState("");
const [password, setPassword] = useState("");

const JoinCard = ({ label, onClick }: IJoinCardProps) => (
  <S.Wrapper>
    <S.Label>{label}</S.Label>
    <S.InputLine>
    <Input
      type="text"
      placeholder="Enter the room's ID"
      value={ID}
      onChange={(e) => {
        setID(e.target.value);
      }}
    ></Input>
    </S.InputLine>
    <S.InputLine>
    <Input
      type="password"
      placeholder="Enter the room's password"
      value={password}
      onChange={(e) => {
        setPassword(e.target.value);
      }}
    ></Input>
    </S.InputLine>
    <S.ButtonLine>
      <Button onClick={onClick} size='small' color='secondary'>Join</Button>
    </S.ButtonLine>
  </S.Wrapper>
);

export default JoinCard;
*/

export {};