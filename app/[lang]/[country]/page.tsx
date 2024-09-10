import { setCookie } from '@/app/actions';

export default function PageCountry() {
  setCookie();
  return (
    <div>
      <h1>Welcome to the country home page</h1>
    </div>
  );
}
