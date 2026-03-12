import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProgressBar from '../ProgressBar';
import QuestionCard from '../QuestionCard';
import type { Question } from '@/types';

// Mock LanguageContext
jest.mock('@/context/LanguageContext', () => ({
  useLang: () => ({ lang: 'en', toggleLang: jest.fn() }),
}));

// Mock framer-motion to render children directly
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => (
      <div {...props}>{children}</div>
    ),
    h2: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => (
      <h2 {...props}>{children}</h2>
    ),
  },
  AnimatePresence: ({ children }: React.PropsWithChildren) => <>{children}</>,
}));

describe('ProgressBar', () => {
  it('renders question count and percentage', () => {
    render(<ProgressBar current={3} total={10} lang="en" />);
    expect(screen.getByText(/Question/)).toBeInTheDocument();
    expect(screen.getByText('30%')).toBeInTheDocument();
  });

  it('renders progress message for halfway', () => {
    render(<ProgressBar current={5} total={10} lang="en" />);
    expect(screen.getByText('50%')).toBeInTheDocument();
    expect(screen.getByText(/Halfway there/)).toBeInTheDocument();
  });

  it('renders with Thai language', () => {
    render(<ProgressBar current={1} total={60} lang="th" />);
    expect(screen.getByText(/ข้อที่/)).toBeInTheDocument();
  });

  it('has progressbar ARIA role', () => {
    render(<ProgressBar current={5} total={10} lang="en" />);
    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).toHaveAttribute('aria-valuenow', '50');
    expect(progressbar).toHaveAttribute('aria-valuemin', '0');
    expect(progressbar).toHaveAttribute('aria-valuemax', '100');
  });
});

describe('QuestionCard', () => {
  const mockQuestion: Question = {
    id: 1,
    dimension: 'EI',
    th: 'คุณชอบพบปะผู้คนมากกว่าอยู่คนเดียว',
    en: 'You enjoy meeting people more than being alone',
    direction: 1,
    mode: 'both',
  };

  it('renders question text in English', () => {
    render(<QuestionCard question={mockQuestion} lang="en" onAnswer={jest.fn()} />);
    expect(screen.getByText('You enjoy meeting people more than being alone')).toBeInTheDocument();
  });

  it('renders question text in Thai', () => {
    render(<QuestionCard question={mockQuestion} lang="th" onAnswer={jest.fn()} />);
    expect(screen.getByText('คุณชอบพบปะผู้คนมากกว่าอยู่คนเดียว')).toBeInTheDocument();
  });

  it('renders 7 scale buttons', () => {
    render(<QuestionCard question={mockQuestion} lang="en" onAnswer={jest.fn()} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(7);
  });

  it('all scale buttons have aria-labels', () => {
    render(<QuestionCard question={mockQuestion} lang="en" onAnswer={jest.fn()} />);
    const buttons = screen.getAllByRole('button');
    buttons.forEach((btn) => {
      expect(btn).toHaveAttribute('aria-label');
    });
  });

  it('calls onAnswer when a scale button is clicked', () => {
    const onAnswer = jest.fn();
    render(<QuestionCard question={mockQuestion} lang="en" onAnswer={onAnswer} />);
    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[0]); // Strongly Agree (+3)
    expect(onAnswer).toHaveBeenCalledWith(1, 'EI', 3, 1);
  });

  it('calls onAnswer with correct values for disagree', () => {
    const onAnswer = jest.fn();
    render(<QuestionCard question={mockQuestion} lang="en" onAnswer={onAnswer} />);
    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[6]); // Strongly Disagree (-3)
    expect(onAnswer).toHaveBeenCalledWith(1, 'EI', -3, 1);
  });

  it('calls onAnswer with neutral value', () => {
    const onAnswer = jest.fn();
    render(<QuestionCard question={mockQuestion} lang="en" onAnswer={onAnswer} />);
    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[3]); // Neutral (0)
    expect(onAnswer).toHaveBeenCalledWith(1, 'EI', 0, 1);
  });
});
