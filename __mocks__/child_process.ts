import { format } from "date-fns";

const childProcess = jest.genMockFromModule<{ execSync: Function }>(
  "child_process"
);

childProcess.execSync = (command: string) => {
  if (command.match(/^git log -1 --format="%ad" --date=short -- /)) {
    return format(new Date(), "yyyy-MM-dd");
  }

  return "\n";
};

export default childProcess;
