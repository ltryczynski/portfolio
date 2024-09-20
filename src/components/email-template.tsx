interface EmailTemplateProps {
  name: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  message,
}) => (
  <div>
    <h1>New message from portfolio.ltmedia.pl!</h1>
    <p>Message from: {name}</p>
    <p>
      Message:
      <br />
      {message}
    </p>
  </div>
);
