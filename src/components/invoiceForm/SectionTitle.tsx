import React from "react";

interface Props {
    title: string;
    step: string
}

const SectionTitle = ({title, step}: Props) => {
  return (
    <div className="flex justify-between">
      <h3 className="text-xl font-bold text-slate-600">{title}</h3>
      <p className="font-light text-xs text-slate-400 self-end display-block border rounded-full px-2">
        {step}
      </p>
    </div>
  );
};

export default SectionTitle;
