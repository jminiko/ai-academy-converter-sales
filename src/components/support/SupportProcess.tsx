
export const SupportProcess = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Comment Ça Marche</h2>
          <p className="text-xl text-gray-600">Processus de support optimisé pour une résolution rapide</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
            <h3 className="font-semibold mb-2">Signalement</h3>
            <p className="text-sm text-gray-600">Contactez-nous par email, téléphone ou chat</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
            <h3 className="font-semibold mb-2">Analyse</h3>
            <p className="text-sm text-gray-600">Diagnostic rapide et priorisation du ticket</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
            <h3 className="font-semibold mb-2">Résolution</h3>
            <p className="text-sm text-gray-600">Intervention d'experts et correction du problème</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
            <h3 className="font-semibold mb-2">Suivi</h3>
            <p className="text-sm text-gray-600">Validation de la résolution et prévention</p>
          </div>
        </div>
      </div>
    </section>
  );
};
