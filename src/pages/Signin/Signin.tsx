import { FormEvent, useState } from 'react';
import { Envelope, Lock } from 'phosphor-react';
import { Text } from '../../components/Text/Text';
import { Button } from "../../components/Button/Button";
import { Checkbox } from "../../components/Checkbox/Checkbox";
import { Heading } from "../../components/Heading/Heading";
import { Input } from "../../components/Input/Input";
import { Logo } from "../../Logo";

export function Signin() {
  const [isUserSignedIn, setIsUserSignIn] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    await fetch('/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'ana@email.com',
        password: '123456'
      })
    });

    setIsUserSignIn(true);
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-gray-100 bg-gray-900">
      <header className="flex flex-col items-center">
        <Logo />
        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>

        <Text size="lg" className="mt-1 text-gray-400">
          Faça login e comece a usar!
        </Text>
      </header>

      <form onSubmit={handleSubmit} className="w-full max-w-[400px] flex flex-col items-stretch gap-4 mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">
            Endereco de e-mail
          </Text>

          <Input.Root>
            <Input.Icon>
              <Envelope />
            </Input.Icon>
            <Input.Content type="email" id="email" placeholder="johndoe@example.com" />
          </Input.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">
            Sua senha
          </Text>

          <Input.Root>
            <Input.Icon>
              <Lock />
            </Input.Icon>
            <Input.Content type="password" id="password" placeholder="**********" />
          </Input.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Esqueceu sua senha?
          </a>
        </Text>
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Não possui conta? Crie uma agora!
          </a>
        </Text>
      </footer>
    </div>
  )
}