import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
      background: var(--text-title);
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color:  var(--text-body);
      border-radius: 0.25rem;
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);

      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }
      &.withraw {
        color: var(--red);
      }
    }
  }


`;
