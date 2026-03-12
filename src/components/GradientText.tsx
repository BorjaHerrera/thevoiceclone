interface GradientTextProps {
  children: React.ReactNode;
}

const GradientText = ({ children }: GradientTextProps) => (
  <span className="gradient-text">{children}</span>
);

export default GradientText;
