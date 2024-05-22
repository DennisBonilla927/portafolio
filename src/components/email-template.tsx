import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  message: string;
  phone: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,message,phone,email,
}) => (
  <div>
    <h1>Correo de, {firstName}!</h1>
    <h3>Número de teléfono: {phone}</h3>
    <h3>Correo: {email}</h3>

    <p>{message}</p>
  </div>
);
