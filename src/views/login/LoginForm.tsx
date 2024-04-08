/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Dispatch, SetStateAction, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import logo from '../../images/servicetrackr_logo.png';

interface LoginFormProps {
  setSignedIn: Dispatch<SetStateAction<boolean>>;
}
export default function LoginForm({
  setSignedIn
}: LoginFormProps): JSX.Element {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div
      style={{ minHeight: '100%' }}
      className="flex align-items-center justify-content-center">
      <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div className="text-center mb-5">
          <img src={logo} alt="hyper" height={150} className="mb-1" />
          <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
          <span className="text-600 font-medium line-height-3">
            Don't have an account?
          </span>
          <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">
            Create today!
          </a>
        </div>

        <div>
          <label htmlFor="email" className="block text-900 font-medium mb-2">
            Email
          </label>
          <InputText
            id="email"
            type="text"
            placeholder="Email address"
            className="w-full mb-3"
          />

          <label htmlFor="password" className="block text-900 font-medium mb-2">
            Password
          </label>
          <InputText
            id="password"
            type="password"
            placeholder="Password"
            className="w-full mb-3"
          />

          <div className="flex align-items-center justify-content-between mb-6">
            <div className="flex align-items-center">
              <Checkbox
                id="rememberme"
                onChange={(e) =>
                  setChecked(e.checked !== undefined && e.checked)
                }
                checked={checked}
                className="mr-2"
              />
              <label htmlFor="rememberme">Remember me</label>
            </div>
            <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">
              Forgot your password?
            </a>
          </div>

          <Button
            label="Sign In"
            icon="pi pi-user"
            className="w-full"
            onClick={() => {
              setSignedIn(true);
            }}
          />
        </div>
      </div>
    </div>
  );
}
