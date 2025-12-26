import { Download, FileText } from "lucide-react";

export default function ResumeSection() {
  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-8 bg-white dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <FileText size={24} className="text-blue-500" />
          <h3 className="text-xl font-semibold">Resume</h3>
        </div>
        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
        >
          <Download size={18} />
          <span>Download PDF</span>
        </a>
      </div>

      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 text-center">
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Place your <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">resume.pdf</code> in the <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">public/</code> folder
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-500">
          The PDF will be embedded here and available for download
        </p>
      </div>

      {/* Uncomment this when you add your PDF */}
      {/* 
      <div className="mt-6">
        <iframe
          src="/resume.pdf"
          className="w-full h-[600px] rounded-lg border border-gray-200 dark:border-gray-700"
          title="Resume"
        />
      </div>
      */}
    </div>
  );
}
