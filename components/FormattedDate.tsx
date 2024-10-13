"use client";

// date-fns is a modern JavaScript date utility library
// https://date-fns.org/
import { isValid, parseISO, format } from "date-fns";

export interface FormattedDateProps {
  dateString: string;
  options?: {
    invalidDateMessage?: string;
  };
}

const FormattedDate = ({ dateString, options }: FormattedDateProps) => {
  if (!dateString || !isValid(parseISO(dateString))) {
    return (
      <time dateTime={dateString}>
        {options?.invalidDateMessage ?? "Invalid Date"}
      </time>
    );
  }

  const date = parseISO(dateString);

  return <time dateTime={dateString}>{format(date, "LLL d, yyyy")}</time>;
  // view different format() string options here:
  // https://date-fns.org/v2.22.1/docs/format
};

export default FormattedDate;
