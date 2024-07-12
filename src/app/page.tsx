import { Form } from './form';

export default function Home() {
  return (
    <main
      className="flex min-h-screen w-full justify-center overflow-hidden p-8 pt-24"
      style={{
        background: 'linear-gradient(167.96deg, #F4F9FF 0%, #E0EDFB 100%)',
      }}>
      <Form />
    </main>
  );
}
