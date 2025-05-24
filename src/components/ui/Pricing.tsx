export default function Pricing() {
    const plans = [
      {
        name: "Starter",
        price: "1 500€",
        features: ["Site vitrine", "5 pages", "SEO de base"]
      },
      {
        name: "Pro",
        price: "3 900€",
        features: ["Site avancé", "Blog intégré", "SEO complet"]
      }
    ]
  
    return (
      <div className="grid md:grid-cols-2 gap-8">
        {plans.map((plan) => (
          <div key={plan.name} className="border border-gray-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <p className="text-3xl font-bold mb-6">{plan.price}</p>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <span className="mr-2">✓</span> {feature}
                </li>
              ))}
            </ul>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
              Choisir ce plan
            </button>
          </div>
        ))}
      </div>
    )
  }