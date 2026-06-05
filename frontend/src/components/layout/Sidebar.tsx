export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-8">
        Cloud Task Manager
      </h2>

      <nav className="space-y-4">
        <button className="block hover:text-blue-400">
          Dashboard
        </button>

        <button className="block hover:text-blue-400">
          Tasks
        </button>

        <button className="block hover:text-blue-400">
          Settings
        </button>
      </nav>
    </aside>
  );
}