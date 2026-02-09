import { Link, useParams } from "react-router-dom";
import CTASection from "../components/CTASection";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import NotFound from "./NotFound";
import { blogPosts } from "../posts";

function renderInline(text: string, keyPrefix: string) {
  const pattern = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null = null;
  let partIndex = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    const token = match[0];
    if (token.startsWith("**") && token.endsWith("**")) {
      const value = token.slice(2, -2);
      nodes.push(
        <strong key={`${keyPrefix}-b-${partIndex}`} className="font-semibold text-slate-900">
          {value}
        </strong>,
      );
    } else {
      const linkMatch = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(token);
      if (linkMatch) {
        const [, label, href] = linkMatch;
        if (href.startsWith("/")) {
          nodes.push(
            <Link
              key={`${keyPrefix}-l-${partIndex}`}
              to={href}
              className="font-semibold text-blue-700 underline decoration-transparent underline-offset-4 hover:decoration-blue-400"
            >
              {label}
            </Link>,
          );
        } else {
          nodes.push(
            <a
              key={`${keyPrefix}-l-${partIndex}`}
              href={href}
              className="font-semibold text-blue-700 underline decoration-transparent underline-offset-4 hover:decoration-blue-400"
              target="_blank"
              rel="noreferrer"
            >
              {label}
            </a>,
          );
        }
      } else {
        nodes.push(token);
      }
    }

    lastIndex = pattern.lastIndex;
    partIndex += 1;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

function renderContent(content: string) {
  const blocks = content
    .trim()
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);

  return blocks.map((block, index) => {
    if (block.startsWith("## ")) {
      const heading = block.replace(/^##\s+/, "");
      return (
        <h2 key={index} className="mt-8 text-2xl font-semibold text-slate-900">
          {renderInline(heading, `h2-${index}`)}
        </h2>
      );
    }

    if (block.startsWith("### ")) {
      const heading = block.replace(/^###\s+/, "");
      return (
        <h3 key={index} className="mt-6 text-xl font-semibold text-slate-900">
          {renderInline(heading, `h3-${index}`)}
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
            <li key={item}>{renderInline(item, `ul-${index}-${item}`)}</li>
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
            <li key={item}>{renderInline(item, `ol-${index}-${item}`)}</li>
          ))}
        </ol>
      );
    }

    return (
      <p key={index} className="mt-4 text-base leading-relaxed text-slate-700">
        {renderInline(block, `p-${index}`)}
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
          <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-8 sm:py-12 lg:px-16 lg:py-16">
            <Link to="/blog" className="text-sm font-semibold text-blue-700 hover:text-blue-800">
              Back to Blogs
            </Link>
            <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">{post.title}</h1>
            <p className="mt-2 text-sm text-slate-500">{post.date}</p>
            <p className="mt-4 text-lg text-slate-700">{post.excerpt}</p>
          </div>
        </section>
      </Reveal>

      <section className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-8 sm:pb-12 lg:px-16 lg:pb-16">
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