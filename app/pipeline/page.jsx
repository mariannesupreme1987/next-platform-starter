const leads = [
  {
    company: "ABC Logistics Inc.",
    contact: "Juan Dela Cruz",
    email: "juan@abclogistics.com",
    status: "Hot",
    lastFollowUp: "2025-11-15",
    nextAction: "Send updated proposal",
    notes: "Interested in bulk TDC + PDC package for 30 drivers.",
  },
  {
    company: "Sunrise BPO Solutions",
    contact: "Maria Santos",
    email: "maria@sunrisebpo.com",
    status: "Warm",
    lastFollowUp: "2025-11-10",
    nextAction: "Schedule Zoom presentation",
    notes: "Looking for onboarding program for new hires.",
  },
  {
    company: "Greenfield Construction Corp.",
    contact: "Mark Reyes",
    email: "mark@greenfieldconstruct.com",
    status: "Cold",
    lastFollowUp: "2025-10-30",
    nextAction: "Light follow-up via email",
    notes: "Busy Q4, revisit by January.",
  },
];

export default function PipelinePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Corporate Pipeline</h1>
        <p className="text-slate-300 mb-6">
          Internal view for SMART corporate clients, leads, and follow-ups.
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-900/80 border-b border-slate-800">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Company</th>
                <th className="px-4 py-3 text-left font-semibold">Contact Person</th>
                <th className="px-4 py-3 text-left font-semibold">Email</th>
                <th className="px-4 py-3 text-left font-semibold">Status</th>
                <th className="px-4 py-3 text-left font-semibold">Last Follow-up</th>
                <th className="px-4 py-3 text-left font-semibold">Next Action</th>
                <th className="px-4 py-3 text-left font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead, index) => (
                <tr
                  key={index}
                  className="border-b border-slate-800 hover:bg-slate-800/40 transition-colors"
                >
                  <td className="px-4 py-3 align-top">
                    <div className="font-medium">{lead.company}</div>
                  </td>
                  <td className="px-4 py-3 align-top">{lead.contact}</td>
                  <td className="px-4 py-3 align-top">
                    <a
                      href={`mailto:${lead.email}`}
                      className="text-sky-400 hover:underline"
                    >
                      {lead.email}
                    </a>
                  </td>
                  <td className="px-4 py-3 align-top">
                    <span
                      className={
                        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold " +
                        (lead.status === "Hot"
                          ? "bg-red-500/20 text-red-300"
                          : lead.status === "Warm"
                          ? "bg-amber-500/20 text-amber-300"
                          : "bg-slate-500/20 text-slate-300")
                      }
                    >
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 align-top">{lead.lastFollowUp}</td>
                  <td className="px-4 py-3 align-top">{lead.nextAction}</td>
                  <td className="px-4 py-3 align-top max-w-xs">
                    <p className="text-slate-300 text-xs leading-relaxed">
                      {lead.notes}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-slate-500 mt-4">
          *Sample data only. We can connect this to Google Sheets or a real database later.
        </p>
      </div>
    </main>
  );
}

