import Card, { CardTitle } from "../components/Card"
import { Button, Checkbox, Input, Label } from "../components/Input"
import Link from "next/link"

export default function Register() {
  return (
    <div>
      <Card>
        <CardTitle showBackbutton >Registreren</CardTitle>
        <div className="flex items-end flex-col">
          <Input inputName="name" placeholder="Jan" label="Naam" />
          <Input inputName="email" placeholder="jan@outlook.com" label="E-mail" type="email" />
          <Input inputName="password" placeholder="********" label="Wachtwoord" type="password" className="mb-6" />
          <Input inputName="repeat_password" placeholder="********" label="Wachtwoord herhalen" type="password" className="mb-6" />
          <Checkbox className="self-start mt-4" inputName="tos" text="Ik ga akkoord met de algemene voorwaarden en het privacybeleid" />
          <Button>Registreren</Button>
          <div className="mt-4 self-start text-center">
            <Label muted="true">Al een account? <Link href="/login"><a className="border-b">Ga naar inloggen</a></Link></Label>
          </div>
        </div>
      </Card>
    </div>
  )
}