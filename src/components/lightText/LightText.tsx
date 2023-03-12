import React from "react";

type LightTextPropsType = {
  string: string;
  filterValue: string;
};

export const LightText = React.memo(({ string, filterValue }: LightTextPropsType) => {
  if (!filterValue) return <>{string}</>;

  const regExp = new RegExp(filterValue, "ig");
  const matchValues = string.match(regExp);

  if (matchValues) {
    return (
      <>
        {string.split(regExp).map((str, index) => {
          const matches = matchValues.shift();
          return (
            <React.Fragment key={index}>
              {str}
              <span style={{ backgroundColor: "yellow" }}>{matches}</span>
            </React.Fragment>
          );
        })}
      </>
    );
  }
  return <>{string}</>;
});
