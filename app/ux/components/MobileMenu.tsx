import Link from 'next/link';

type MobileMenuProps = {
  onClose: () => void;
};

export function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <div className="md:hidden bg-black/90 text-white px-6 py-4 space-y-4">
      {['personajes', 'episodios', 'universos'].map((section) => (
        <Link
          key={section}
          href={`#${section}`}
          onClick={onClose}
          className="block hover:text-toxic"
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </Link>
      ))}
    </div>
  );
}
