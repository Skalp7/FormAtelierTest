import { Button } from "@/components/ui/button";

export function ContactForm() {
  return (
    <form
      className="grid gap-4"
      action="mailto:studio@formatelier.fr"
      method="post"
      encType="text/plain"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-graphite">
          Name
          <input className="border border-line bg-transparent px-4 py-3 text-ink outline-none transition focus:border-ink" name="name" required />
        </label>
        <label className="grid gap-2 text-sm text-graphite">
          Email
          <input className="border border-line bg-transparent px-4 py-3 text-ink outline-none transition focus:border-ink" type="email" name="email" required />
        </label>
      </div>
      <label className="grid gap-2 text-sm text-graphite">
        Project
        <select className="border border-line bg-paper px-4 py-3 text-ink outline-none transition focus:border-ink" name="projectType">
          <option>Bespoke website</option>
          <option>Website redesign</option>
          <option>Brand identity</option>
          <option>Digital strategy</option>
          <option>Maintenance and evolution</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm text-graphite">
        Brief
        <textarea className="min-h-40 border border-line bg-transparent px-4 py-3 text-ink outline-none transition focus:border-ink" name="message" required />
      </label>
      <Button type="submit" className="mt-4 w-full md:w-fit">
        Begin a conversation
      </Button>
    </form>
  );
}
