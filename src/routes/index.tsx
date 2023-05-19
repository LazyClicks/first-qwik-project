import { Resource, component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$, Link } from "@builder.io/qwik-city";
import Card from "~/components/card/card";

interface BlogData {
  id: string;
  title: string;
  content: string;
}

export const useRequestHandler = routeLoader$(async () => {
  console.log("onGet");
  const responce = await fetch(
    "https://first-qwik-json-server.vercel.app/api/blogs/"
  );
  const data = await responce.json();
  return data as BlogData[];
});

export default component$(() => {
  const blogsData = useRequestHandler();
  return (
    <div class="background">
      <h2>oki dokie</h2>

      <Resource
        value={blogsData}
        onPending={() => <div>loading...</div>}
        onResolved={(blogs) => (
          <div class="blogs">
            {blogs &&
              blogs.map((blog) => (
                <Card key={blog.id}>
                  <h3 q:slot="title">{blog.title}</h3>
                  <p q:slot="content">{blog.content.slice(0, 50)}...</p>
                  <Link q:slot="footer" href={"/blog/" + blog.id}>
                    <button>Read More</button>
                  </Link>
                </Card>
              ))}
          </div>
        )}
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Mario Life",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
