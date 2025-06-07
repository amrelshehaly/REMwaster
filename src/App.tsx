import { useEffect, useRef, useState } from 'react'
import './App.css'
import type { Skip } from './types/skip'
import { useGetSkip } from './hooks/useGetSkip'
import SnackBar from './components/atoms/SnackBar'
import Loading from './assets/loader.gif'
import SkipPreview from './components/molecules/SkipPreview'
import SkipList from './components/molecules/SkipList'

function App() {
  const { skipList, loading, error } = useGetSkip();
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);
  const [previewOpen, setPreviewOpen] = useState<Skip | undefined>(undefined);
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (previewOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [previewOpen]);

  if (loading) {
    return (
      <div>
        <img src={Loading} alt="Loading" />
      </div>
    )
  }

  return (
    <div ref={ref}>
      <SnackBar message={error || ''} isOpen={snackBarOpen} onClose={() => setSnackBarOpen(false)} />
      <SkipList selectedSkip={selectedSkip} setSelectedSkip={setSelectedSkip} setPreviewOpen={setPreviewOpen} skipList={skipList} />
      <SkipPreview previewOpen={previewOpen} setPreviewOpen={setPreviewOpen} />
    </div>
  )
}

export default App
