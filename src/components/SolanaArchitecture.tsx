export default function SolanaArchitecture() {
  return (
    <div className="my-12 p-8 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/10 rounded-xl">
      <h3 className="text-xl font-semibold mb-6 text-center">
        Solana dApp Architecture
      </h3>
      <svg
        viewBox="0 0 800 400"
        className="w-full max-w-4xl mx-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Frontend */}
        <g>
          <rect
            x="50"
            y="50"
            width="200"
            height="100"
            rx="10"
            fill="currentColor"
            className="text-blue-500"
            opacity="0.2"
          />
          <text
            x="150"
            y="90"
            textAnchor="middle"
            className="fill-gray-900 dark:fill-white text-sm font-semibold"
          >
            React Frontend
          </text>
          <text
            x="150"
            y="110"
            textAnchor="middle"
            className="fill-gray-600 dark:fill-gray-400 text-xs"
          >
            TypeScript + Tailwind
          </text>
        </g>

        {/* Web3.js/Wallet */}
        <g>
          <rect
            x="300"
            y="50"
            width="200"
            height="100"
            rx="10"
            fill="currentColor"
            className="text-purple-500"
            opacity="0.2"
          />
          <text
            x="400"
            y="90"
            textAnchor="middle"
            className="fill-gray-900 dark:fill-white text-sm font-semibold"
          >
            Web3.js
          </text>
          <text
            x="400"
            y="110"
            textAnchor="middle"
            className="fill-gray-600 dark:fill-gray-400 text-xs"
          >
            Wallet Integration
          </text>
        </g>

        {/* Anchor Program */}
        <g>
          <rect
            x="550"
            y="50"
            width="200"
            height="100"
            rx="10"
            fill="currentColor"
            className="text-green-500"
            opacity="0.2"
          />
          <text
            x="650"
            y="90"
            textAnchor="middle"
            className="fill-gray-900 dark:fill-white text-sm font-semibold"
          >
            Anchor Program
          </text>
          <text
            x="650"
            y="110"
            textAnchor="middle"
            className="fill-gray-600 dark:fill-gray-400 text-xs"
          >
            Rust Smart Contracts
          </text>
        </g>

        {/* Solana Blockchain */}
        <g>
          <rect
            x="300"
            y="250"
            width="200"
            height="100"
            rx="10"
            fill="currentColor"
            className="text-indigo-500"
            opacity="0.2"
          />
          <text
            x="400"
            y="290"
            textAnchor="middle"
            className="fill-gray-900 dark:fill-white text-sm font-semibold"
          >
            Solana Blockchain
          </text>
          <text
            x="400"
            y="310"
            textAnchor="middle"
            className="fill-gray-600 dark:fill-gray-400 text-xs"
          >
            On-chain State
          </text>
        </g>

        {/* Arrows */}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon
              points="0 0, 10 3, 0 6"
              className="fill-gray-400 dark:fill-gray-600"
            />
          </marker>
        </defs>

        {/* Frontend -> Web3 */}
        <line
          x1="250"
          y1="100"
          x2="300"
          y2="100"
          className="stroke-gray-400 dark:stroke-gray-600"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />

        {/* Web3 -> Anchor */}
        <line
          x1="500"
          y1="100"
          x2="550"
          y2="100"
          className="stroke-gray-400 dark:stroke-gray-600"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />

        {/* Anchor -> Blockchain */}
        <line
          x1="650"
          y1="150"
          x2="500"
          y2="250"
          className="stroke-gray-400 dark:stroke-gray-600"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />

        {/* Web3 -> Blockchain */}
        <line
          x1="400"
          y1="150"
          x2="400"
          y2="250"
          className="stroke-gray-400 dark:stroke-gray-600"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />
      </svg>
    </div>
  );
}
