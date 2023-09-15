export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("What is your name?")) {
    return (
      "Antara"
    );
  }

  if (query.toLowerCase().includes("plus")) {
    return (
      (parseInt(query.split(" ")[2]) + parseInt(query.split(" ")[4].replace(/\?/g, ''))).toString()
    );
  }

  if (query.toLowerCase().includes("power")) {
    return (
      (Math.pow(parseInt(query.split(" ")[2]),parseInt(query.split(" ")[-1].replace(/\?/g, ''))).toString()
    ));
  }

  if (query.toLowerCase().includes("multiplied")) {
    return (
      (parseInt(query.split(" ")[2])*parseInt(query.split(" ")[5].replace(/\?/g, ''))).toString()
    );
  }

  if (query.toLowerCase().includes("Which of the following numbers is the largest")) {
    return (
      Math.max((parseInt(query.split(" ")[-1].replace(/\?/g, '')), parseInt(query.split(" ")[-2]), parseInt(query.split(" ")[-3]))).toString()
    );
  }

  if (query.toLowerCase().includes("minus")) {
    return (
      (parseInt(query.split(" ")[2]) - parseInt(query.split(" ")[4].replace(/\?/g, ''))).toString()
    );
  }

  if (query.toLowerCase().includes("What is your Andrew ID?")) {
    return (
      "antarap"
    );
  }
  return "";
}
