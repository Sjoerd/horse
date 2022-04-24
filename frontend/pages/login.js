import Card, { CardTitle } from "../components/Card"
import { Button, Input, Label } from "../components/Input"
import Link from "next/link"

export default function Login() {
  return (
    <div>
      <Card>
        <CardTitle showBackbutton >Inloggen</CardTitle>
        <div className="flex items-end flex-col">
          <Input inputName="email" placeholder="jan@outlook.com" label="E-mail" />
          <Input inputName="password" placeholder="********" label="Wachtwoord" type="password" className="mb-6" />
          <Button>Inloggen</Button>
          <div className="mt-4 self-start text-center">
            <Label muted="true"><Link href="/auth/password">Wachtwoord vergeten?</Link></Label>
          </div>
        </div>
      </Card>
    </div>
  )
}