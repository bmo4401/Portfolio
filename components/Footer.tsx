import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t-2 border-solid border-dark font-medium text-lg  flex justify-between h-14 items-center px-8">
      <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
      <div className="flex items-center">
        {' '}
        Build with{' '}
        <span className="text-3xl px-1 text-forePrimary ">&#9825;</span>
        by&nbsp;
        <Link
          href={process.env.NEXT_PUBLIC_GITHUB}
          className="underline underline-offset-2"
        >
          Kyle4401
        </Link>
      </div>
      <Link
        href="/"
        className="underline underline-offset-2"
        target="_blank"
      >
        Welcome
      </Link>
    </footer>
  );
};
export default Footer;
