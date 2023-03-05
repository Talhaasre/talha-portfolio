export const reduceDescSize = (desc, length = 80) => {
  let reducedDesc;
  if (desc.length <= length) {
    reducedDesc = desc;
    return reducedDesc;
  } else {
    reducedDesc = desc.substring(0, length);
    reducedDesc = reducedDesc.substr(
      0,
      Math.min(reducedDesc.length, reducedDesc.lastIndexOf(" "))
    );
    reducedDesc += "...";
    return reducedDesc;
  }
};
