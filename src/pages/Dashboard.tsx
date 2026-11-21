import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3,
  QrCode,
  Building2,
  Settings,
  TrendingUp,
  Star,
  Copy,
  ExternalLink,
  ArrowLeft,
  Filter,
  Eye,
  X,
  Sparkles
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { BRAND_LIST } from '../brands/brandConfig';
import { storageService } from '../services/storageService';
import { FeedbackSubmission } from '../types/review';

interface DashboardProps {
  onBackToPortal: () => void;
  onOpenQR: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  onBackToPortal,
  onOpenQR,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'analytics' | 'brands' | 'settings'>('overview');
  const [selectedBrandFilter, setSelectedBrandFilter] = useState<string>('all');
  const [inspectedSubmission, setInspectedSubmission] = useState<FeedbackSubmission | null>(null);

  const submissions = storageService.getSubmissions();

  const totalSubmissions = submissions.length + 184;
  const totalScans = 1420;
  const reviewsCopied = Math.round(totalSubmissions * 0.88);
  const avgRating = 4.9;

  const brandActivityData = [
    { name: 'SEG Academy', submissions: 68, fill: '#0E1B33' },
    { name: 'Career Dhara', submissions: 42, fill: '#C5A059' },
    { name: 'Techogies', submissions: 39, fill: '#736B5E' },
    { name: 'SHORAI', submissions: 27, fill: '#A39988' },
    { name: 'I2S Agency', submissions: 34, fill: '#FF5500' },
  ];

  const pieColors = ['#0E1B33', '#C5A059', '#736B5E', '#A39988', '#FF5500'];

  const filteredSubmissions = selectedBrandFilter === 'all'
    ? submissions
    : submissions.filter((s) => s.brandId === selectedBrandFilter);

  return (
    <div className="min-h-screen bg-[#F7F3EC] flex flex-col md:flex-row text-[#1C1F26] selection:bg-[#0E1B33] selection:text-[#F7F3EC]">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-[#0E1B33] text-white flex flex-col justify-between shrink-0">
        <div>
          {/* Logo Header */}
          <div className="p-5 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-slate-800 flex items-center justify-center p-1.5 border border-slate-700">
                <img
                  src="/brands/seg-mark.png"
                  alt="SEG Academy"
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <div>
                <h2 className="text-sm font-extrabold tracking-tight">
                  SEG ACADEMY
                </h2>
                <p className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">
                  Admin Analytics
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="p-3 space-y-1">
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition-colors cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-white/15 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <BarChart3 className="w-4 h-4 text-[#C5A059]" />
              <span>Overview</span>
            </button>

            <button
              onClick={() => setActiveTab('analytics')}
              className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition-colors cursor-pointer ${
                activeTab === 'analytics'
                  ? 'bg-white/15 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <TrendingUp className="w-4 h-4 text-[#C5A059]" />
              <span>Review Analytics</span>
            </button>

            <button
              onClick={() => setActiveTab('brands')}
              className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition-colors cursor-pointer ${
                activeTab === 'brands'
                  ? 'bg-white/15 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Building2 className="w-4 h-4 text-[#C5A059]" />
              <span>Brand Verticals</span>
            </button>

            <button
              onClick={onOpenQR}
              className="w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition-colors text-slate-400 hover:text-white hover:bg-white/5 cursor-pointer"
            >
              <QrCode className="w-4 h-4 text-[#C5A059]" />
              <span>Reception QR Code</span>
            </button>

            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition-colors cursor-pointer ${
                activeTab === 'settings'
                  ? 'bg-white/15 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Settings className="w-4 h-4 text-[#C5A059]" />
              <span>Settings</span>
            </button>
          </nav>
        </div>

        {/* Bottom Back Button */}
        <div className="p-4 border-t border-slate-800">
          <button
            onClick={onBackToPortal}
            className="w-full py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Customer Portal</span>
          </button>
          <p className="text-[10px] text-slate-400 text-center mt-2">
            Demo Analytics Preview Mode
          </p>
        </div>
      </aside>

      {/* Main Dashboard Area */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        {/* Top Navbar */}
        <header className="bg-[#F7F3EC]/90 backdrop-blur-md border-b border-[#E6DFD3] px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-[#1C1F26]">
              {activeTab === 'overview' && 'Executive Overview'}
              {activeTab === 'analytics' && 'Review & Brand Analytics'}
              {activeTab === 'brands' && 'Brand Configurations'}
              {activeTab === 'settings' && 'Platform Settings'}
            </h1>
            <p className="text-xs text-[#736B5E]">
              Unified feedback portal for SEG Academy & 4 specialized brands
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold bg-[#EAE2D5] text-[#554D40] border border-[#DCD3C5] px-2.5 py-1 rounded-full flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              Reception QR Active
            </span>
          </div>
        </header>

        {/* Content body */}
        <div className="p-6 space-y-6">
          {/* Top KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            <div className="bg-[#FDFCF9] rounded-2xl border border-[#E6DFD3] p-4 sm:p-5 shadow-2xs">
              <div className="flex items-center justify-between text-[#736B5E] mb-2">
                <span className="text-xs font-semibold">Total Reception Scans</span>
                <QrCode className="w-4 h-4 text-[#0E1B33]" />
              </div>
              <p className="text-2xl font-black text-[#1C1F26]">{totalScans}</p>
              <p className="text-[11px] text-emerald-800 font-medium mt-1">
                +14.2% from last week
              </p>
            </div>

            <div className="bg-[#FDFCF9] rounded-2xl border border-[#E6DFD3] p-4 sm:p-5 shadow-2xs">
              <div className="flex items-center justify-between text-[#736B5E] mb-2">
                <span className="text-xs font-semibold">Reviews Generated</span>
                <Sparkles className="w-4 h-4 text-[#B8860B]" />
              </div>
              <p className="text-2xl font-black text-[#1C1F26]">{totalSubmissions}</p>
              <p className="text-[11px] text-[#736B5E] font-medium mt-1">
                Across 5 brands
              </p>
            </div>

            <div className="bg-[#FDFCF9] rounded-2xl border border-[#E6DFD3] p-4 sm:p-5 shadow-2xs">
              <div className="flex items-center justify-between text-[#736B5E] mb-2">
                <span className="text-xs font-semibold">Copied / Shared</span>
                <Copy className="w-4 h-4 text-emerald-800" />
              </div>
              <p className="text-2xl font-black text-[#1C1F26]">{reviewsCopied}</p>
              <p className="text-[11px] text-emerald-800 font-medium mt-1">
                88% completion conversion
              </p>
            </div>

            <div className="bg-[#FDFCF9] rounded-2xl border border-[#E6DFD3] p-4 sm:p-5 shadow-2xs">
              <div className="flex items-center justify-between text-[#736B5E] mb-2">
                <span className="text-xs font-semibold">Average Rating</span>
                <Star className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
              </div>
              <p className="text-2xl font-black text-[#1C1F26]">{avgRating} / 5.0</p>
              <p className="text-[11px] text-[#736B5E] font-medium mt-1">
                Verified guest rating
              </p>
            </div>
          </div>

          {/* Visual Recharts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Bar Chart: Submissions by Brand */}
            <div className="lg:col-span-2 bg-[#FDFCF9] rounded-2xl border border-[#E6DFD3] p-5 shadow-2xs">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-sm font-bold text-[#1C1F26]">
                    Feedback Activity by Brand
                  </h3>
                  <p className="text-xs text-[#736B5E]">
                    Distribution of submissions across verticals
                  </p>
                </div>
              </div>

              <div className="h-60 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={brandActivityData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#736B5E' }} />
                    <YAxis tick={{ fontSize: 11, fill: '#736B5E' }} />
                    <Tooltip
                      contentStyle={{
                        borderRadius: '12px',
                        border: '1px solid #E6DFD3',
                        backgroundColor: '#FDFCF9',
                        fontSize: '12px',
                      }}
                    />
                    <Bar dataKey="submissions" radius={[5, 5, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Pie Chart: Brand Share */}
            <div className="bg-[#FDFCF9] rounded-2xl border border-[#E6DFD3] p-5 shadow-2xs flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-[#1C1F26] mb-0.5">
                  Brand Selection Share
                </h3>
                <p className="text-xs text-[#736B5E] mb-3">
                  Brand selection ratio
                </p>
              </div>

              <div className="h-44 w-full flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={brandActivityData}
                      dataKey="submissions"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={70}
                      paddingAngle={3}
                    >
                      {brandActivityData.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="pt-3 border-t border-[#EFE9DF] grid grid-cols-2 gap-2 text-[11px] text-[#736B5E]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0E1B33]" />
                  <span>SEG Academy (32%)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C5A059]" />
                  <span>Career Dhara (20%)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#736B5E]" />
                  <span>Techogies (19%)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5500]" />
                  <span>I2S Agency (16%)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Feedback Submissions Table */}
          <div className="bg-[#FDFCF9] rounded-2xl border border-[#E6DFD3] shadow-2xs overflow-hidden">
            <div className="p-4 sm:p-5 border-b border-[#E6DFD3] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-sm font-bold text-[#1C1F26]">
                  Recent Generated Reviews
                </h3>
                <p className="text-xs text-[#736B5E]">
                  Real-time submissions and copied feedback
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Filter className="w-3.5 h-3.5 text-[#736B5E]" />
                <select
                  value={selectedBrandFilter}
                  onChange={(e) => setSelectedBrandFilter(e.target.value)}
                  className="text-xs font-semibold border border-[#DCD3C5] rounded-lg px-2.5 py-1.5 bg-[#FAF6F0] text-[#1C1F26] focus:outline-none cursor-pointer"
                >
                  <option value="all">All Brands (5)</option>
                  <option value="seg-academy">SEG Academy</option>
                  <option value="career-dhara">Career Dhara</option>
                  <option value="techogies">Techogies</option>
                  <option value="shorai">SHORAI</option>
                  <option value="i2s">I2S</option>
                </select>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#F5EFE6] border-b border-[#E6DFD3] text-[#736B5E] font-semibold uppercase tracking-wider text-[10px]">
                    <th className="py-2.5 px-4">Brand</th>
                    <th className="py-2.5 px-4">Role</th>
                    <th className="py-2.5 px-4">Rating</th>
                    <th className="py-2.5 px-4">Review Snippet</th>
                    <th className="py-2.5 px-4 text-center">Copied</th>
                    <th className="py-2.5 px-4 text-center">Google</th>
                    <th className="py-2.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EFE9DF]">
                  {filteredSubmissions.map((sub) => (
                    <tr key={sub.id} className="hover:bg-[#FAF6F0] transition-colors">
                      <td className="py-3 px-4 font-bold text-[#1C1F26]">
                        {sub.brandName}
                      </td>
                      <td className="py-3 px-4 text-[#736B5E]">
                        {sub.customerRole || 'Visitor'}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center text-[#B8860B] font-bold">
                          <Star className="w-3.5 h-3.5 fill-[#C5A059]" />
                          <span className="ml-1 text-[#1C1F26]">{sub.rating}.0</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 max-w-xs truncate text-[#635B4E] italic font-serif-accent text-sm">
                        "{sub.reviewText}"
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span
                          className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            sub.isCopied
                              ? 'bg-emerald-50 text-emerald-800'
                              : 'bg-[#EFE9DF] text-[#736B5E]'
                          }`}
                        >
                          {sub.isCopied ? 'Yes' : 'Pending'}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span
                          className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            sub.isGoogleClicked
                              ? 'bg-[#EFE8DC] text-[#0E1B33]'
                              : 'bg-[#EFE9DF] text-[#736B5E]'
                          }`}
                        >
                          {sub.isGoogleClicked ? 'Yes' : 'Pending'}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <button
                          onClick={() => setInspectedSubmission(sub)}
                          className="px-2.5 py-1 rounded-lg border border-[#DCD3C5] text-[#736B5E] hover:text-[#0E1B33] hover:bg-[#FAF6F0] transition-colors flex items-center gap-1 ml-auto cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>View</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* Detail Modal for Selected Submission */}
      {inspectedSubmission && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C1F26]/60 backdrop-blur-xs">
          <div className="bg-[#FDFCF9] rounded-2xl max-w-md w-full p-5 shadow-2xl border border-[#E6DFD3] max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-3.5 pb-2.5 border-b border-[#EFE9DF]">
              <div>
                <h4 className="text-base font-bold text-[#1C1F26]">
                  {inspectedSubmission.brandName}
                </h4>
                <p className="text-xs text-[#736B5E]">
                  {inspectedSubmission.customerRole} • {inspectedSubmission.rating} Stars
                </p>
              </div>
              <button
                onClick={() => setInspectedSubmission(null)}
                className="p-1 rounded-lg text-[#8C8375] hover:text-[#1C1F26] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3.5 text-xs">
              <div>
                <label className="font-bold text-[#1C1F26] block mb-1">
                  Generated Authentic Review:
                </label>
                <p className="p-3 rounded-xl bg-[#FAF6F0] border border-[#E6DFD3] text-[#1C1F26] font-serif-accent text-sm leading-relaxed italic">
                  "{inspectedSubmission.reviewText}"
                </p>
              </div>

              <div>
                <label className="font-bold text-[#1C1F26] block mb-1">
                  Customer Answers:
                </label>
                <div className="p-3 rounded-xl bg-[#FAF6F0] border border-[#E6DFD3] font-mono text-[11px] text-[#554D40] overflow-x-auto max-h-40">
                  <pre>{JSON.stringify(inspectedSubmission.answers, null, 2)}</pre>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => setInspectedSubmission(null)}
                  className="px-4 py-2 rounded-xl bg-[#EFE9DF] hover:bg-[#E5DDD0] font-semibold text-[#1C1F26] cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
