import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
import type { Skip } from './types/skip'
import { useGetSkip } from './hooks/useGetSkip'
import SnackBar from './components/atoms/SnackBar'
import SkipPreview from './components/molecules/SkipPreview'
import SkipList from './components/molecules/SkipList'
import Loader from './components/atoms/Loader'

function App() {
  const { skipList, loading, error } = useGetSkip();
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);
  const [previewOpen, setPreviewOpen] = useState<Skip | undefined>(undefined);
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleCloseSnackBar = useCallback(() => {
    setSnackBarOpen(false);
  }, []);

  const handleSetPreviewOpen = useCallback((skip?: Skip) => {
    setPreviewOpen(skip);
  }, []);

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
        <Loader />
      </div>
    )
  }

  return (
    <div ref={ref}>
      <SnackBar message={error || ''} isOpen={snackBarOpen} onClose={handleCloseSnackBar} />
      <SkipList selectedSkip={selectedSkip} setSelectedSkip={setSelectedSkip} setPreviewOpen={handleSetPreviewOpen} skipList={skipList} />
      <SkipPreview previewOpen={previewOpen} setPreviewOpen={handleSetPreviewOpen} />
    </div>
  )
}

export default App
