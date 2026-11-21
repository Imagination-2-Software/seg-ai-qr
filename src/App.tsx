import React, { useState, useEffect } from 'react';
import { LandingPage } from './pages/LandingPage';
import { ReviewFlow } from './pages/ReviewFlow';
import { ReviewResult } from './pages/ReviewResult';
import { QRCodePage } from './pages/QRCodePage';
import { BrandInfo } from './types/brand';
import { BRANDS_CONFIG } from './brands/brandConfig';

type ActiveView = 'landing' | 'flow' | 'result' | 'qr';

interface ActiveReviewState {
  brand: BrandInfo;
  answers: Record<string, any>;
  reviewText: string;
  rating: number;
  submissionId: string;
}

export function App() {
  const [currentView, setCurrentView] = useState<ActiveView>('landing');
  const [selectedBrand, setSelectedBrand] = useState<BrandInfo | null>(null);
  const [reviewState, setReviewState] = useState<ActiveReviewState | null>(null);

  // Check URL params for direct brand or view deep-links on mount
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const brandParam = params.get('brand');
      const viewParam = params.get('view');

      if (viewParam === 'qr') {
        setCurrentView('qr');
      } else if (brandParam && BRANDS_CONFIG[brandParam as keyof typeof BRANDS_CONFIG]) {
        setSelectedBrand(BRANDS_CONFIG[brandParam as keyof typeof BRANDS_CONFIG]);
        setCurrentView('flow');
      }
    } catch {
      // Ignore
    }
  }, []);

  const handleSelectBrand = (brand: BrandInfo) => {
    setSelectedBrand(brand);
    setCurrentView('flow');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFlowComplete = (data: ActiveReviewState) => {
    setReviewState(data);
    setCurrentView('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToBrands = () => {
    setCurrentView('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEditAnswers = () => {
    setCurrentView('flow');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full min-h-screen">
      {currentView === 'landing' && (
        <LandingPage
          onSelectBrand={handleSelectBrand}
          onOpenQR={() => setCurrentView('qr')}
        />
      )}

      {currentView === 'flow' && selectedBrand && (
        <ReviewFlow
          brand={selectedBrand}
          onBackToBrands={handleBackToBrands}
          onComplete={handleFlowComplete}
        />
      )}

      {currentView === 'result' && selectedBrand && reviewState && (
        <ReviewResult
          brand={selectedBrand}
          initialReviewText={reviewState.reviewText}
          rating={reviewState.rating}
          answers={reviewState.answers}
          submissionId={reviewState.submissionId}
          onEditAnswers={handleEditAnswers}
          onBackToHome={handleBackToBrands}
        />
      )}

      {currentView === 'qr' && (
        <QRCodePage onBack={() => setCurrentView('landing')} />
      )}
    </div>
  );
}

export default App;
