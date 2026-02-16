# Personal Link Tree

A minimal and customizable personal link-tree website that lets you share all your important links in one place. Perfect for social media bios, portfolios, and personal branding.

## Tech Stack

- React / Next.js
- TypeScript
- Tailwind CSS
- Shadcn

## Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository

You can clone using HTTPS or SSH.

### Via HTTPS
```bash
git clone https://github.com/Hamzeh-Dev/link-tree.git
```

### Via SSH Key
```bash
git clone git@github.com:Hamzeh-Dev/link-tree.git
```

### 2. Navigate to the project:

```bash
cd link-tree
```

### 3. Install dependencies:

```bash
npm install
```

### 4. Start the app:

```bash
npm run dev
```

Open in browser at http://localhost:3000

## Updating Your Links

To customize the links shown on the page:

### 1. Open the file:
```bash
src/components/Container.tsx
```

### 2. Locate the array called links (line 19).

Replace the existing entries with your own link data.

```ts
const links: LinksProps[] = [
    {
        id: "1",
        title: "GitHub",
        subtitle: "Check out my code",
        url: "https://github.com/yourusername",
        icon: <Github className="w-6 h-6" />,
        color: "hover:bg-gray-100 dark:hover:bg-gray-800",
    },
];
```

Simply edit this array to update the links displayed on your personal link tree.

## Adding a New Link

To add a new platform link:

1. Go to the Lucide React icon website.

    - https://lucide.dev/icons

2. Search for the platform icon you want.

3. Copy the icon component name.

4. Import the icon in Container.tsx.

5. Add a new object inside the links array.

### Example: Adding Twitch

First import the icon:

```ts
import { Twitch } from "lucide-react";
```

Then add a new entry:

```tsx
{
    id: id++,
    title: "Twitch",
    subtitle: "Watch my live streams",
    url: "https://twitch.tv/yourusername",
    icon: <Twitch className="w-6 h-6" />,
    color: "hover:bg-purple-100 dark:hover:bg-purple-900",
}
```

Once added, the new link will automatically appear on the page.

## Customizing Profile Section

You can easily change your profile image, name, and header text.

### 1. Profile Image

- Place your image inside the /public folder:

```bash
/public/profile.png
```

- Open:

```bash
src/components/Container.tsx
```

- In the Profile Section, update the <Image /> component:

```tsx
<Image src="/profile.png" ... />
```

### 2. Name and Header

- Directly under the <Image />, locate the elements for your name and header.

- Update their content with your own text:

After saving, your personal name, header, and image will appear on the page.