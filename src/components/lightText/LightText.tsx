import React from "react";

type LightTextPropsType = {
  string: string;
  filterValue: string;
};

export const LightText = ({ string, filterValue }: LightTextPropsType) => {
  if (!filterValue) return <>{string}</>;

  const regexp = new RegExp(filterValue, "ig");
  const matchValue = string.match(regexp);

  if (matchValue) {
    return (
      <>
        {string.split(regexp).map((str) => {
          const matches = matchValue.shift();
          return (
            <>
              {str}
              <span style={{ backgroundColor: "yellow" }}>{matches}</span>
            </>
          );
        })}
      </>
    );
  }

  return <>{string}</>;
};
