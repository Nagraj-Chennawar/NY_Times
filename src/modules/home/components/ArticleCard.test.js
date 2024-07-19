import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ArticleCard from './articleCard.component';

// Mock data for the ArticleCard component
const mockData = {
  title: "Sample Title",
  abstract: "This is a sample abstract.",
  updated: "2024-07-19",
  imgUrl: "https://via.placeholder.com/150",
  articleUrl: "https://example.com/article"
};

describe('ArticleCard Component', () => {
  test('renders the title, abstract, updated date, and link correctly', () => {
    render(<ArticleCard {...mockData} />);

    // Check if the title is rendered
    expect(screen.getByText(mockData.title)).toBeInTheDocument();

    // Check if the abstract is rendered
    expect(screen.getByText(mockData.abstract)).toBeInTheDocument();

    // Check if the updated date is rendered
    expect(screen.getByText(`updated: ${mockData.updated}`)).toBeInTheDocument();

    // Check if the link is rendered with the correct href attribute
    const link = screen.getByRole('link', { name: /read more here/i });
    expect(link).toHaveAttribute('href', mockData.articleUrl);
  });
});
