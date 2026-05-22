type Props = {
    label: string;
    title: string;
  };
  
  export default function SectionHeading({
    label,
    title,
  }: Props) {
    return (
      <div className="mb-16">
        <p
          className="
            mb-4
            text-sm uppercase
            tracking-[0.3em]
            text-neutral-500
          "
        >
          {label}
        </p>
  
        <h2
          className="
            max-w-4xl
            text-5xl
            leading-tight
            md:text-6xl
          "
        >
          {title}
        </h2>
      </div>
    );
  }