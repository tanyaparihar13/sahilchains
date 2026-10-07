const S = ['Premium Chain Designs','Bulk & Wholesale Orders','Retailer & Distributor Supply','Quality-Focused Manufacturing']
export default function Stats() {
  return <section className="border-y border-gold/25 bg-emerald-deep"><div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4">
    {S.map(s => <div key={s} className="p-6 lg:p-9 text-center font-serif text-xl text-softgold border-gold/15 lg:[&:not(:last-child)]:border-r">{s}</div>)}
  </div></section>
}
