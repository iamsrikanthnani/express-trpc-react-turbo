import { useState } from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { trpc } from "@/utils";
import App from "./App";

const Application = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        gcTime: 3 * 60 * 60 * 1000,
        refetchOnWindowFocus: false,
        retry: 3,
      },
    },
  });
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: `${import.meta.env.VITE_SERVER_URL}/trpc`,
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </trpc.Provider>
  );
};

export default Application;

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container);
root.render(<Application />);
