import Layout from "@/pages/Layout";
import Index from "@/pages/Index";
import Blog from "@/pages/Blog";
import NotFound from "@/pages/NotFound";

const router = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: 'blog',
        element: <Blog />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
]
export default router