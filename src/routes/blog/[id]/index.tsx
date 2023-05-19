import { Resource, component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

interface BlogData {
  id: string;
  title: string;
  content: string;
}

export const useRequestHandler = routeLoader$(async (requestEvent) => {
  const res = await fetch(
    "https://first-qwik-json-server.vercel.app/api/blogs/" +
      requestEvent.params.id
  );
  if (!res.ok) {
    console.log("redirecting user");
    throw requestEvent.redirect(302, "/");
  }
  const data = await res.json();
  return data as BlogData;
});

export default component$(() => {
  const blogsData = useRequestHandler();
  console.log("blogsData", blogsData);
  return (
    <div class="blog background">
      <Resource
        value={blogsData}
        onPending={() => <div>Loading...</div>}
        onResolved={(blog) => (
          <div>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </div>
        )}
      />
    </div>
  );
});
