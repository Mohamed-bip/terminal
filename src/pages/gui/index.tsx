import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { BsTerminal, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';
import { getBio } from '../../api';
import { NextPageContext } from 'next';

const GuiPage: React.FC<{ bio: string }> = ({ bio }) => {
  const socialLinks = [
    {
      name: 'Github',
      href: 'https://github.com/Mohamed-bip',
      icon: <BsGithub className="text-2xl" />,
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/zeykox',
      icon: <BsInstagram className="text-2xl" />,
    },
    {
      name: 'Discord',
      href: 'https://discord.gg/uQYSX79UJd',
      icon: <BsDiscord className="text-2xl" />,
    },
  ];

  return (
    <div className="p-8 overflow-hidden h-full border-2 rounded border-gruvboxlight-yellow dark:border-gruvboxdark-yellow">
      <div className="flex">
        <div className="flex-grow text-2xl">
          <Link href="/" passHref>
            <a>FULL'SHOP</a>
          </Link>
        </div>

        <div className="flex-shrink space-x-4 flex flex-row">
          {socialLinks.map((socialLink) => (
            <a
              key={socialLink.name}
              href={socialLink.href}
              target="_blank"
              rel="noreferrer"
              className="text-gruvboxlight-blue dark:text-gruvboxdark-blue underline"
            >
              {socialLink.icon}
            </a>
          ))}

          <Link href="/" passHref>
            <a className="text-gruvboxlight-blue dark:text-gruvboxdark-blue underline">
              <BsTerminal className="text-2xl" />
            </a>
          </Link>
        </div>
      </div>

      <div className="h-full w-full mt-8">
        <ReactMarkdown
          components={{
            a: ({ children, ...props }) => (
              <a
                className="text-gruvboxlight-blue dark:text-gruvboxdark-blue underline"
                {...props}
                target="_blank"
                rel="noreferrer"
              >
                {children}
              </a>
            ),
            h1: ({ children, ...props }) => (
              <h1 className="text-2xl mb-4" {...props}>
                {children}
              </h1>
            ),
            p: ({ children, ...props }) => (
              <p className="mb-2" {...props}>
                {children}
              </p>
            ),
          }}
        >
          {bio}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export async function getStaticProps(context: NextPageContext) {
  const bio = await getBio();

  return {
    props: {
      bio,
    }, // will be passed to the page component as props
  };
}

export default GuiPage;
