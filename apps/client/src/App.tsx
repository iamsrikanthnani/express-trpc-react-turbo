import { trpc } from "@/utils";

const App = () => {
  const test = trpc.test.getTest.useQuery();

  return <div>{test.isLoading ? "Loading..." : test.data?.number}</div>;
};

export default App;
