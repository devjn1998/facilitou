interface TitleProps {
  children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return <h1 className="text-2xl font-bold mb-5">{children}</h1>;
};

export default Title;
