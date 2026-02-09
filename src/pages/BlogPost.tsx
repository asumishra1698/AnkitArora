import { Link, useParams } from "react-router-dom";
import CTASection from "../components/CTASection";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import NotFound from "./NotFound";
import { blogPosts } from "../posts";

function renderContent(content: string) {
  const blocks = content
    .trim()
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);

  return blocks.map((block, index) => {
    if (block.startsWith("## ")) {
      return (
        <h2 key={index} className="mt-8 text-2xl font-semibold text-slate-900">
          {block.replace(/^##\s+/, "")}
        </h2>
      );
    }

    if (block.startsWith("### ")) {
      return (
        <h3 key={index} className="mt-6 text-xl font-semibold text-slate-900">
          {block.replace(/^###\s+/, "")}
        </h3>
      );
    }

    if (block.startsWith("- ")) {
      const items = block
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line.startsWith("- "))
        .map((line) => line.replace(/^-\s+/, ""));

      return (
        <ul key={index} className="mt-4 list-disc space-y-2 pl-5 text-base text-slate-700">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    }

    if (/^\d+\)/.test(block)) {
      const items = block
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => /^\d+\)/.test(line))
        .map((line) => line.replace(/^\d+\)\s+/, ""));

      return (
        <ol key={index} className="mt-4 list-decimal space-y-2 pl-5 text-base text-slate-700">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      );
    }

    return (
      <p key={index} className="mt-4 text-base leading-relaxed text-slate-700">
        {block}
      </p>
    );
  });
}

function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return <NotFound />;
  }

  return (
    <div>
      <Seo title={post.seoTitle} description={post.seoDescription} keywords={post.keywords} />
      <Reveal>
        <section className="bg-slate-50">
          <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-8 sm:py-12 lg:px-16 lg:py-16">
            <Link to="/blog" className="text-sm font-semibold text-blue-700 hover:text-blue-800">
              Back to Blogs
            </Link>
            <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">{post.title}</h1>
            <p className="mt-2 text-sm text-slate-500">{post.date}</p>
            <p className="mt-4 text-lg text-slate-700">{post.excerpt}</p>
          </div>
        </section>
      </Reveal>

      <section className="mx-auto w-full max-w-5xl px-4 pb-10 sm:px-8 sm:pb-12 lg:px-16 lg:pb-16">
        {renderContent(post.content)}
      </section>

      <CTASection
        title="Need help with business compliance?"
        description="Speak with our experts for a tailored checklist and timeline for your organization."
        ctaLabel="Request a Call Back"
        ctaTo="/contact"
      />
    </div>
  );
}

export default BlogPost;