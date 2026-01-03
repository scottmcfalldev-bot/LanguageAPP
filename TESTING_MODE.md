# Weekend Testing Mode - TEMPORARY

## Current Status
✅ **Weekend testing is ENABLED**

The app currently defaults to Monday's schedule on weekends (Saturday/Sunday) so you can test the full functionality.

---

## To Restore Normal Weekend Behavior After Testing

When you're done testing and want weekends to show the rest message again:

### Option 1: Manual Edit
Edit `src/lib/scheduleUtils.ts` line 80:

**Change FROM:**
```typescript
return dayMap[day] || 'monday';
```

**Change TO:**
```typescript
return dayMap[day] || null;
```

Then rebuild:
```bash
npm run build
git add src/lib/scheduleUtils.ts
git commit -m "Restore normal weekend behavior - show rest message"
git push
```

### Option 2: Quick One-Liner
```bash
# Revert the specific change
git revert 332c6fb

# Or manually with sed (Linux/Mac)
sed -i "s/return dayMap\[day\] || 'monday';/return dayMap[day] || null;/" src/lib/scheduleUtils.ts
npm run build
```

---

## What Changes When You Restore

**Current (Testing Mode):**
- Weekends show Monday's schedule (Spanish primary, Japanese maintenance)
- Full app functionality available 7 days/week

**After Restore (Production Mode):**
- Weekends show rest message
- Suggests passive learning activities (shows, podcasts, reading)
- Aligns with 5-day evidence-based schedule

---

## Testing Checklist

While weekend testing is enabled, verify:
- [ ] Vocabulary cards load correctly
- [ ] SRS review system works (can rate cards 0-5)
- [ ] Card review updates next review date
- [ ] Conversation practice interface loads
- [ ] Writing exercise accepts input and shows simulated feedback
- [ ] Progress dashboard displays stats correctly
- [ ] LocalStorage persists data between page refreshes
- [ ] All three languages selectable (Spanish, Japanese, Mandarin)
- [ ] Session completion flow works end-to-end

---

**Commit hash for testing mode:** `332c6fb`
**File modified:** `src/lib/scheduleUtils.ts`
