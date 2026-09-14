# README demo recordings

The README is designed for one lead GIF and two optional workflow GIFs. Capture real product interactions before enabling the commented insertion points. The README must remain complete without the animations.

## Recording plan

| Asset | Placement | Storyboard | Target length |
| --- | --- | --- | --- |
| `assets/demos/research.gif` | After the introduction | Enter a company-research question → cut to the completed answer → open a supporting source. End with evidence visible. | 12–18 seconds |
| `assets/demos/portfolio.gif` | After the portfolio section | Open a demonstration portfolio → inspect holdings and concentration → ask about the visible exposure. End on the answer tied to those holdings. | 10–15 seconds |
| `assets/demos/strategy.gif` | After the strategy section | Open a prepared strategy → show a completed backtest → inspect drawdown and assumptions. End on results, without submitting an order or deployment. | 12–18 seconds |

Record research first. Add the other clips only when they explain something the lead demo does not. Prepare slow results in advance and make time cuts apparent; never imply a backtest or agent response completed instantly.

## Visual direction

- Capture the actual desktop app at a consistent 1440 × 900 window size. Export at 960–1200 pixels wide, with text readable at GitHub's README width.
- Use one theme, consistent window framing, and a tidy demonstration account. Keep cursor movement deliberate and show one meaningful action at a time.
- Label synthetic records visibly as **Demo data**. Preserve relevant source dates, coverage limits, and backtest assumptions.
- Exclude personal balances, account identifiers, email addresses, tokens, private conversations, and desktop notifications. Inspect every frame before publishing.
- Aim for 10–12 fps and less than 5 MB per GIF. Hold the final state for two seconds and avoid flashing transitions. Trim the story before sacrificing text legibility.
- Export a matching PNG still for each clip, and retain an MP4 for reuse outside the README. Commit only public, reviewed deliverables under `assets/demos/`.

## Embedding

After the GIF and still exist, replace the corresponding README comment with:

```markdown
![Mavori answers a company-research question and opens a supporting source.](assets/demos/research.gif)

[View a still of the research demo](assets/demos/research.png)
```

Use equivalent descriptive alt text for the portfolio and strategy clips. Include a short **Demo data** caption if the clip uses synthetic records. Do not add an image link until the asset exists.

## Before publishing media

1. Watch every clip and verify the displayed workflow works in the current release.
2. Inspect the README on GitHub in light and dark themes, at desktop and narrow widths.
3. Confirm text remains readable, GIFs and stills load, and the README stays useful without animation.
4. Re-record or remove a clip when the product journey changes materially.
