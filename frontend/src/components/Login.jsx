import { SignIn } from '@clerk/clerk-react';

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <SignIn path="/login" routing="path" signUpUrl="/register" />
    </div>
  );
};

export default Login;
